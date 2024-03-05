import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { service } from '../services/album.service';
import { Photo } from '../types/Photo';
import { Album as AlbumType } from '../types/Album';
import { PhotoItem } from '../components/PhotoItem';

export const Album = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<Photo[]>([]);
    const [albumInfo, setAlbumInfo] = useState<AlbumType>({id: 0, title: '', userId: 0});

    useEffect(() => {
        if(params.id) {
            loadPhotos(params.id);
            loadAlbumInfo(params.id);
        }
    }, []);

    const loadPhotos = async (id: string) => {
        setLoading(true);
        const photos = await service.getPhotosFromAlbum(id);
        setList( photos );
        setLoading(false);
    }

    const loadAlbumInfo = async (id: string) => {
        const albumInfo = await service.getAlbum(id);
        setAlbumInfo(albumInfo);
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            <button onClick={handleBackButton}>Voltar</button>

            {loading && "Carregando..."}

            <h1>{albumInfo.title}</h1>
            
            {list.map((item, index) => (
                <PhotoItem
                    key={index}
                    data={item}
                />
            ))}
        </div>
    );
}