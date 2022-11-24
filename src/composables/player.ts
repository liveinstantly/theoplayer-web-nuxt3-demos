import type { Ref } from "vue";
import { Sources, TextTrackDescription, VR, VRConfiguration } from "theoplayer";

export const usePlayer = () => {
    const sources: Ref<Sources> = useState('sources', () => ([]));
    const setSources = (sources: Ref<Sources>) => (newSources: Sources) => {
        sources.value = newSources;
    };

    const textTracks: Ref<TextTrackDescription[]> = useState('textTracks', () => ([]));
    const setTextTracks = (textTracks: Ref<TextTrackDescription[]>) => (newtextTracks: TextTrackDescription[]) => {
        textTracks.value = newtextTracks;
    };

    const vr: Ref<VRConfiguration> = useState('vr', () => ({}));
    const setVR = (vr: Ref<VRConfiguration>) => (newVr: VRConfiguration) => {
        vr.value = newVr;
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
        vr: vr,
        setVR: setVR(vr),
        poster: poster,
        setPoster: setPoster(poster),
    };
}
