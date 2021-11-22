import React from 'react';
import {
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

const withRouter = (WrappedComponent) => (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const navigate = useNavigate();

  return (
    <WrappedComponent
      {...props}
      navigate={navigate}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
      params={params}
    />
  );
};

export default withRouter;
