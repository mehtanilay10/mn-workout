"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Requests a Screen Wake Lock to prevent the device screen from sleeping
 * while the component is mounted. Automatically re-acquires the lock when
 * the page becomes visible again (required by the Wake Lock spec).
 * Silently degrades on browsers that do not support the API.
 */
export function useWakeLock() {
	const wakeLockRef = useRef<WakeLockSentinel | null>(null);

	const requestWakeLock = useCallback(async () => {
		if (!("wakeLock" in navigator)) return;
		try {
			wakeLockRef.current = await navigator.wakeLock.request("screen");
		} catch {
			// Permission denied or API unavailable – fail silently
		}
	}, []);

	const releaseWakeLock = useCallback(async () => {
		if (wakeLockRef.current) {
			await wakeLockRef.current.release();
			wakeLockRef.current = null;
		}
	}, []);

	useEffect(() => {
		// Re-acquire wake lock when the tab becomes visible again
		const handleVisibilityChange = () => {
			if (document.visibilityState === "visible") {
				requestWakeLock();
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);
		requestWakeLock();

		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
			releaseWakeLock();
		};
	}, [requestWakeLock, releaseWakeLock]);
}
