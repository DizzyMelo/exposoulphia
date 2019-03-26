// @flow
import typeimport { internals } from "rx";
 {Picture} from "../../components/Model";

export type Track = {
    name: string,
    uri: string
};

export type Pathway = {
    id: string,
    created_at: string,
    titulo: string,
    titulo_eng: string,
    subtitulo: string,
    subtitulo_eng: string,
    descricao: string,
    descricao_eng: string,
    url_video: string,
    arquivo: string,
    folder: string,
    status: string,
    excluido: string 
};

export type Video = {
    id: string,
    created_at: string,
    titulo: string,
    titulo_eng: string,
    descricao: string,
    descricao_eng: string,
    duracao: string,
    link: string,
    ordem: string,
    folder: string,
    arquivo: string,
    pathway_id: string,
    status: string,
    excluido: string 
};

export type Album = {
    id: string,
    name: string,
    artist: string,
    picture: Picture
};

export type PlaylistEntry = {
    album: Album,
    track: Track
};

export type Playlist = {
    id: string,
    name: string,
    entries: PlaylistEntry[]
};

export type User = {
    id: string,
    name: string,
    picture: string,
    caption: string,
    cover: Picture
};

export type Music = {
    albums: Album[],
    tracks: string => Track[],
    playlists: Playlist[],
    me: User,
    transformAlbumToPlaylist: Album => Playlist
};
