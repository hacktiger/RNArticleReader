import { ArticleReaderGateway } from '../../configs/myGateway'
//
import { PATH_ARTICLE } from '../../res/paths/Path'
//
export default class ArticleDataService {
  getAllArticle () {
    return ArticleReaderGateway.get(`${PATH_ARTICLE}`);
  }

  postArticle (body) {
    return ArticleReaderGateway.post(`${PATH_ARTICLE}`, body)
  }

  getArticleById (article_id) {
    return ArticleReaderGateway.get(`${PATH_ARTICLE}/${article_id}`);
  }

  putArticleById (article_id, body){
    return ArticleReaderGateway.put(`${PATH_ARTICLE}/${article_id}`, body)
  }

  deleteArticleById (article_id) {
    return ArticleReaderGateway.delete(`${PATH_ARTICLE}/${article_id}`);
  }
}