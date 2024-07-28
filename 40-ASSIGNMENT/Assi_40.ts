function make_album( Artist:string,title:string,tracks?:number):{Artist:string,title:string,tracks?:number
}{
    let album:{Artist:string,title:string,tracks?:number}={
        title:title,
        Artist:Artist,
        tracks:tracks
    };
    if(tracks!==undefined){
        album.tracks=tracks;
        }
        return album
    }
    let album1=make_album("Artist One","Title",);
    let album2=make_album("Artist Two","Title",60);
    let album3=make_album("Artist Three","Title",30);


    console.log(album1);
    console.log(album2);
    console.log(album3);
    
