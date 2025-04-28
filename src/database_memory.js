import { randomUUID } from 'crypto';
export class DatabaseMemory {
    #videos = new Map(); 

    list(search) {
        return Array.from(this.#videos.entries()).map((VideoArray)=>{
            
            const id = VideoArray[0]
            const data =VideoArray[1]

            return {
                id,
                ...data
            }
        }).filter(video =>{
            if (search) {
                return video.title.includes(search)
                
            }
            return true
        })
    }
    
    create(video) {
        const videoID = randomUUID();

        this.#videos.set(videoID, video);
        return videoID; 
    }
    
    update(id, video) {
        return this.#videos.set(id, video);
    }
    
    delete(id) {
        return this.#videos.delete(id);
    }
}
