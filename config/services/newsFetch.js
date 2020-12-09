import { articles_url, _api_key, country_code } from '../rest_config';
//http://newsapi.org/v2/everything?domains=psychiatryadvisor.com&apiKey=3fd1838d66d94a3a94059c6da62059be

export async function getArticles(category='general') {

    try {
        let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`, {
            headers: {
                'X-API-KEY': _api_key
            }
        });

        //json data ke result ,, fetching data json
        let result = await articles.json();
        //null untuk clear variable let articles karena mau ngerujuk json articles kebetyulan sama varibale ya
        articles = null;
        
        
        return result.articles;
    }
        catch(error){
            throw error;
        }    
}