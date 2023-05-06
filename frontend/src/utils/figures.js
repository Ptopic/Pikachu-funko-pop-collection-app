import client from '../api/client';

const catchError = (error) => {
	if (error?.response?.data) {
		return error.response.data;
	} else {
		return { success: false, error: error.message };
	}
};

export const getFigures = async () => {
	try {
		const { data } = await client.get('/figures/get-figures');
		return data;
	} catch (error) {
		return catchError(error);
	}
};

export const updateFigure = async (id) => {
	try {
		const { data } = await client.post('/figures/update-figure', { id });
		return data;
	} catch (error) {
		return catchError(error);
	}
};
