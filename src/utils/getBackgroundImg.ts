const PAGES_BACKGROUND_CLASSNAMES = {
  '/courses': 'bg-courses-background-img bg-no-repeat bg-fixed bg-left-bottom',
  '/dashboard': 'bg-dashboard-background-img bg-no-repeat bg-fixed bg-left-bottom'
};
export type PagesBgTypes = keyof typeof PAGES_BACKGROUND_CLASSNAMES;

export function getBackgroundImg(pathName: PagesBgTypes) {
  if (pathName in PAGES_BACKGROUND_CLASSNAMES) {
    return PAGES_BACKGROUND_CLASSNAMES[pathName];
  } else return '';
}
