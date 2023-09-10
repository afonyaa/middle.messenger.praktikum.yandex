import PreviewProfileTemplate from './Preview/previewProfile.hbs';
import EditProfileTemplate from './Edit/editProfile.hbs';

export const MyProfileEditPageRootURL = '/my-profile/edit';
export const MyProfilePreviewPageRootURL = '/my-profile/preview';

export default ({ isPreview }: { isPreview: boolean }) => {
  return isPreview ? PreviewProfileTemplate : EditProfileTemplate;
};
