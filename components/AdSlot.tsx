'use client'

import { useEffect } from "react"

export default function AdSlot({
  slot = "7010336913",  // ← TVŮJ SKUTEČNÝ AD SLOT
}) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.log("AdSense error:", e)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", minHeight: 120 }}
      data-ad-client="ca-pub-5722084112656408"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}
