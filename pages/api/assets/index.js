// mock database
import DB from 'db.json';
import _ from 'lodash'

const handler = (req, res) => {

  const { query: { sort = "", page = false, size = 5 } = {} } = req;

  let data = DB;
  let pagination = false;
  let error = false;

  if ( sort ) {
    let field = sort.split(':')[0];
    let direction = sort.split(':').length == 2 ? sort.split(':')[1] : 'asc';
    data = _.orderBy(DB, [field], [direction]);
  }

  if( +page >= 1 ) {
    let pageIndex = Math.abs(page) - 1;
    let data_chunk = _.chunk(data, size);

    if ( data_chunk.length - 1 < pageIndex) {
      
      data = [];
      error = {"message": "Page not found"}

    } else {
      
      data = data_chunk[pageIndex];

      pagination = {
        prev: pageIndex != 0 ? pageIndex : false,
        next: data_chunk.length - 1 == pageIndex ? false : pageIndex + 2,
      }
    }
  }

  res.status(200).json({
     error: error,
     data: data,
     total: DB.length,
     count: data.length,
     pagination: pagination
  });
};

export default handler;
