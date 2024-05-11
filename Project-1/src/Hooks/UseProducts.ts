import { useEffect, useState } from 'react';

const useProducts = (pageSize: number) => {
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetching = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                setError(true);
                console.log("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetching();
    }, []);

    const getPageData = (page: number): any[] => {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return data.slice(startIndex, endIndex);
    };

    return { getPageData, error, loading };
};

export default useProducts;