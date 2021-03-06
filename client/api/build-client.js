import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    // Request to ingress http://ingress-nginx-controller-admission.kube-system.svc.cluster.local
    return axios.create({
      baseURL: 'http://ingress-nginx-controller-admission.kube-system.svc.cluster.local',
      headers: req.headers
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/'
    });
  }
};
