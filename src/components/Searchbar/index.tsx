import React, { useState } from "react";
import { RootState, useAppSelector } from "../../redux/store";
import { searchTrack } from "../../utils/fetchAPI";
import { Track as ITrack } from "../../types/spotify";

interface IProps {
    onSuccess: (tracks: ITrack[]) => void;
    onClearSearch: () => void;
}

const SearchBar: React.FC<IProps> = ({ onSuccess, onClearSearch }) => {
    const [text, setText] = useState<string>("");
    const accessToken: string = useAppSelector(
        (state: RootState) => state.auth.accessToken
    );

    const handleInput = (e: React.ChangeEvent) => {
        const target = e.target as HTMLTextAreaElement;
        setText(target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const responseSearch = await searchTrack(text, accessToken);

            const tracks = responseSearch.tracks.items;
            onSuccess(tracks);
        } catch (e) {
            alert(e);
        }
    };

    const clearSearch: () => void = () => {
        setText("");
        onClearSearch();
    };

    return (
        <div className="search-wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="query"
                        placeholder="Search tracks..."
                        aria-label="search-input"
                        onChange={handleInput}
                        value={text}
                        required
                    />
                    <button aria-label="search-button" className="btn btn-primary">
                        Search
                    </button>
                </div>
            </form>
            <button
                aria-label="clear-button"
                className="btn btn-text"
                onClick={clearSearch}
            >
                Clear Search
            </button>
        </div>
    );
};

export default SearchBar;