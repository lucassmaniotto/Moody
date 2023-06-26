import { swalApiError } from '../../util/swalApiError';

export const getMoodRecordByUserId = async (id) => {
  const response = await fetch(`http://localhost:3333/mood/${id}`);
  const data = await response.json();
  if (response.status !== 200) {
    swalApiError();
  } else {
    return data;
  }
};

export const getNextIdtoRecord = async () => {
  try {
    const response = await fetch('http://localhost:3333/mood/last-id');
    const data = await response.json();
    if (data.length === 0) return 1;
    return data[0].id + 1;
  } catch (error) {
    swalApiError();
  }
};

export const postMoodRecord = async (moodRecord) => {
  try {
    const response = await fetch('http://localhost:3333/mood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moodRecord),
    });
    return response;
  } catch (error) {
    swalApiError();
  }
};

export const deleteMoodRecord = async (id) => {
  try {
    const response = await fetch(`http://localhost:3333/mood/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    swalApiError();
  }
};

export const updateMoodRecord = async (id, moodRecord) => {
  try {
    const response = await fetch(`http://localhost:3333/mood/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moodRecord),
    });
    return response;
  } catch (error) {
    swalApiError();
  }
}

export const getMoodRecordById = async (id) => {
  const response = await fetch(`http://localhost:3333/mood/record/${id}`);
  const data = await response.json();
  if (response.status !== 200) {
    swalApiError();
  }
  return data[0];
};
