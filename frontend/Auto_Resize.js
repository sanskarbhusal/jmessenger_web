import React, { Component, createRef } from "react";

type Props = {};
type State = {
    value: string;
};

class AutoGrowingTextarea extends Component<Props, State> {
    textareaRef = createRef < HTMLTextAreaElement > ();

    state: State = {
        value: "",
    };

    handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const el = this.textareaRef.current;
        if (el) {
            el.style.height = "auto"; // Reset height
            el.style.height = el.scrollHeight + "px"; // Set to scrollHeight
        }
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <textarea
                ref={this.textareaRef}
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter your text..."
                className="break-words whitespace-pre-wrap resize-none relative sm:bottom-[6px] w-[90%] sm:w-[96%] min-h-[52px] text-lg text-black font-medium font-sans rounded-3xl border border-gray-300 focus:border-gray-400 bg-white drop-shadow-sm shadow-inner pl-10 pr-10 placeholder-gray-500/80 outline-none overflow-hidden"
            />
        );
    }
}

export default AutoGrowingTextarea;
