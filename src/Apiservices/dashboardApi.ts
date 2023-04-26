import axios from 'axios';
// import { Dashboard } from "../models/dashboard";

// export const fetchDashboardData = async () => {
//   try {
//     const response = await axios.get('https://fe-task-api.mainstack.io/');
//     return response.data;
//   } catch (err) {
//     console.error(err);
//   } finally {
//     // eslint-disable-next-line no-unsafe-finally
//     return [];
//   }
// };

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get('https://fe-task-api.mainstack.io/');
    return response;
  } catch (err) {
    console.error(err);
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return [];
  }
};
