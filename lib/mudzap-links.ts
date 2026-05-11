export const MUDZAP_COMMUNITY_URL = "https://chat.whatsapp.com/G9WCOLPBX9sHdA2cPSmhoa"
export const MUDZAP_GITHUB_URL = "https://github.com/Otiosun/Mudzap-site"

export function goToExternalLink(url: string) {
  if (typeof window === "undefined") return

  window.location.assign(url)
}
