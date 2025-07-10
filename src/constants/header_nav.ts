interface NavItem {
  name: string;
  path: string;
  exact?: boolean;
}

export const HEADER_NAV: NavItem[] = [
  {
    name: "home",
    path: "/",
    exact: true,
  },
  {
    name: "works",
    path: "/projects",
  },
  {
    name: "about-me",
    path: "/about",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

// Utility function for active link detection
export const isActivePath = (
  path: string,
  currentPath: string,
  exact = false
) => {
  return exact ? path === currentPath : currentPath.startsWith(path);
};
