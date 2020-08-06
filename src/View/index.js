import Home from './home';
import UserProfile from './userProfile';
import UserRepos from './userRepos';

import withHeader from 'Hoc/withHeader';

const EnhancedHome = withHeader(Home);
const EnhancedUserProfile = withHeader(UserProfile);

export { EnhancedHome as Home, EnhancedUserProfile as UserProfile, UserRepos };
