// Types for Header component

export type HeaderNavLink = {
  href: string;
  label: string;
  ariaLabel?: string;
};

export type HeaderProps = {
  /**
   * Lista de links exibida no menu principal (desktop + mobile).
   * Quando omitida, o Header usa os links do site principal.
   */
  links?: HeaderNavLink[];
};

