import axios from 'axios';

const API_URL = 'https://app2.mytapp.com.br/api/app';

export interface Beer {
    tap_id: number;
    price_ml: number;
    beer_id: number;
    beer_name: string;
    beer_style: string;
    beer_ibu: number;
    beer_alcohol: number;
    beer_description: string;
    beer_image: string;
    brewery: string;
    brewery_image: string;
}

export interface BeerResponse {
    info: {
        data: Beer[];
    };
    success: boolean;
}

export const getBeers = async (page: number, perPage: number): Promise<BeerResponse> => {
    try {
        const e_id = 456;
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error('No token found');
        }

        const response = await axios.get<BeerResponse>(`${API_URL}/getTaps?e_id=${e_id}&page=${page}&per_page=${perPage}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Failed to fetch beers: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching beers:', error);
        throw error;
    }
};
