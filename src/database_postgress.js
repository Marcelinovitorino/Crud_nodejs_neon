import { sql } from "./db.js";

export class DatabasePostgress {
    //Metodo de listagem de videos
  async list(search) {
    let videos
    if (search) {
     videos = await sql`SELECT * FROM videos order by id asc WHERE title ILIKE '%' || ${search} || '%'`

        
    } else {
            videos = await sql`select *from videos`
        
    }
    return videos
  }
//Metodo de criacao de videos
  async create(video) {
    const { title, description, duration } = video;

    await sql`insert into videos (title,description,duration) values(${title},${description},${duration})`;
  }
//Metodo de actualizacao de videos
 async  update(id, video) {
  const { title, description, duration } = video;

  await sql`update videos set title =${title}, description = ${description}, duration = ${duration} where id = ${id}`

  }
//Metodo de exclusao de videos
  async delete(id) {
    await sql`delete from videos where id =${id}`

  }
}
