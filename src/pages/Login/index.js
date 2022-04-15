import React, { useEffect } from 'react';
import config from '../../utils/config';
import { getUserProfile } from '../../utils/fetchAPI';
import { useDispatch } from 'react-redux';
import { login } from '../../utils/authSlice';
import { useHistory } from 'react-router-dom';
import { Anchor } from '@mantine/core';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash);
    const accessTokenParams = params.get('#access_token');

    if (accessTokenParams !== null) {
      const setUserProfile = async () => {
        try {
          const response = await getUserProfile(accessTokenParams);
          dispatch(
            login({
              accessToken: accessTokenParams,
              user: response,
            })
          );
          history.push('/create-playlist');
        } catch (e) {
          alert(e);
        }
      };
      setUserProfile();
    }
  }, []);

  const getSpotifyLinkAuthorize = () => {
    const state = Date.now().toString();

    // eslint-disable-next-line no-undef
    const clientId = process.env.REACT_APP_SPOTIFY_ID;

    return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${config.RESPONSE_TYPE}&redirect_uri=${config.REDIRECT_URI}&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
  };

  return (
    <div className="login-wrapper">
      <p>
        Before using <b>Spotify App</b>, please login to Spotify here.
      </p>
      <Anchor href={getSpotifyLinkAuthorize()} radius="lg" size="lg">
        LOGIN
      </Anchor>
    </div>
  );
}