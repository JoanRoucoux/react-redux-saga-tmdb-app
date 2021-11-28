const saveSessionId = (sessionId) => localStorage.setItem('sessionId', sessionId);
const retrieveSessionId = () => localStorage.getItem('sessionId');
const removeSessionId = () => localStorage.removeItem('sessionId');
const getAuthorizationHeader = { Authorization: `Bearer ${retrieveSessionId()}` };

const SessionUtils = {
  saveSessionId,
  retrieveSessionId,
  removeSessionId,
  getAuthorizationHeader,
};

export default SessionUtils;
