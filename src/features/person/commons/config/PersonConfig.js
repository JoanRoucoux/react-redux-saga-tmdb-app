import { FPUtils } from '../../../../core';
import defaultPersonThumbnail from '../assets/w235_and_h235_default_person.jpg';

const {
  isDefined,
} = FPUtils;

/**
 * Format person list
 *
 * @param personList List of persons
 * @returns {formatted person list}
 */
const formatPersonList = (personList) => {
  if (isDefined(personList)) {
    // Because data are coming from the MovieDB API,
    // we cannot fix the camelcase
    /* eslint-disable camelcase */
    return personList.map((person) => {
      const {
        id,
        known_for,
        name,
        profile_path,
      } = person || {};
      return {
        id,
        knownFor: known_for.slice(0, 3).map(({ title }) => title).join(', '),
        name,
        profilePath: profile_path
          ? `https://image.tmdb.org/t/p/w235_and_h235_face${profile_path}`
          : defaultPersonThumbnail,
        responsiveProfilePath: profile_path && `https://image.tmdb.org/t/p/w235_and_h235_face${profile_path} 1x,`
          + `https://image.tmdb.org/t/p/w470_and_h470_face${profile_path} 2x`,
      };
    });
  }
  return null;
};

/**
 * Format person details for profile
 *
 * @param personDetails Person details
 * @returns {formatted person profile}
 */
const formatPersonProfile = (personDetails) => {
  if (isDefined(personDetails)) {
    const {
      also_known_as,
      name,
      imdb_id,
      profile_path,
    } = personDetails;
    return {
      alsoKnownAsList: also_known_as,
      name,
      imdbId: imdb_id,
      profilePath: profile_path
        ? `https://image.tmdb.org/t/p/w300_and_h450_face${profile_path}`
        : defaultPersonThumbnail,
      responsiveProfilePath: profile_path && `https://image.tmdb.org/t/p/w300_and_h450_face${profile_path} 1x,`
          + `https://image.tmdb.org/t/p/w600_and_h900_face${profile_path} 2x`,
    };
  }
  return null;
};

const PersonConfig = {
  formatPersonList,
  formatPersonProfile,
};

export default PersonConfig;
