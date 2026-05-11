const repoName = "Mudzap-site"

export const siteBasePath =
  process.env.NODE_ENV === "production" ? `/${repoName}` : ""

export function withBasePath(path: string) {
  if (!path) {
    return siteBasePath
  }

  return path.startsWith("/") ? `${siteBasePath}${path}` : `${siteBasePath}/${path}`
}
