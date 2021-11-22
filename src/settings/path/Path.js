import { AboutPath } from '../../features/about/commons';
import { HomePath } from '../../features/home/commons';
import { NotFoundPath } from '../../features/not-found/commons';

const Path = {
  ...AboutPath,
  ...HomePath,
  ...NotFoundPath,
};

export default Path;
