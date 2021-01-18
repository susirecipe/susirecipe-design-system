interface Menu {
  name: string;
  link: string;
}

interface MainMenu extends Menu {
  submenu: Array<Menu>;
  pos?: number;
}