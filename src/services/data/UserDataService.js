import { ArticleReaderGateway } from '../../configs/myGateway'
//
import { PATH_USER } from '../../res/paths/Path'
//
export default class ArticleDataService {
  getAllUser () {
    return ArticleReaderGateway.get(`${PATH_USER}`);
  }

  postUser (body) {
    return ArticleReaderGateway.post(`${PATH_USER}`, body)
  }

  getUserById (user_id) {
    return ArticleReaderGateway.get(`${PATH_USER}/${user_id}`);
  }

  putUserById (user_id, body){
    return ArticleReaderGateway.put(`${PATH_USER}/${user_id}`, body)
  }

  deleteUserById (user_id) {
    return ArticleReaderGateway.delete(`${PATH_USER}/${user_id}`);
  }
}