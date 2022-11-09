import type { Ref } from "vue";
import { Sources, TextTrackDescription } from "theoplayer";

export const usePlayer = () => {
    const sources: Ref<Sources> = useState('sources', () => ([]));
    const setSources = (sources: Ref<Sources>) => (newSources: Sources) => {
        sources.value = newSources;
    };

    const textTracks: Ref<TextTrackDescription[]> = useState('textTracks', () => ([]));
    const setTextTracks = (textTracks: Ref<TextTrackDescription[]>) => (newtextTracks: TextTrackDescription[]) => {
        textTracks.value = newtextTracks;
    };

    const poster: Ref<string> = useState('poster', () => (""));
    const setPoster = (poster: Ref<string>) => (newPoster: string) => {
        poster.value = newPoster;
    };

    return {
        sources: sources,
        setSources: setSources(sources),
        textTracks: textTracks,
        setTextTracks: setTextTracks(textTracks),
        poster: poster,
        setPoster: setPoster(poster),
    };
}
