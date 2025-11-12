import axios from "axios";

export type Review = {
   id: number;
   author: string;
   content: string;
   rating: number;
   createdAt: string;
};

export type GetReviewsResponse = {
   summary: string | null;
   reviews: Review[];
};

export type SummarizeResponse = {
   summary: string;
};

// 👇 Hard-coded backend URL
const BASE_URL = "https://review-summarizer-server.onrender.com";

export const reviewsApi = {
    fetchReviews(productId: number) {
        return axios
            .get<GetReviewsResponse>(`${BASE_URL}/api/products/${productId}/reviews`)
            .then(res => res.data);
    },

    summarizeReviews(productId: number) {
        return axios
            .post<SummarizeResponse>(
                `${BASE_URL}/api/products/${productId}/reviews/summarize`
            )
            .then(res => res.data);
    },
};
