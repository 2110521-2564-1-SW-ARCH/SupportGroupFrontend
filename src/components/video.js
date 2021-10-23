import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { AudioProfile } from '../components/audio/audioprofile';

const Video = ({ peer, name }) => {
    const refVideo = useRef(null);

    useEffect(() => {
        if (peer) {
            peer.on('stream', (stream) => {
                refVideo.current.srcObject = stream;
            });
        }
    }, [peer]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <video style={{ position: "absolute" }} autoPlay ref={refVideo} playsInline>
                <track kind="captions" />
            </video>
            <AudioProfile displayName={name} />
        </div>
    );
};

Video.propTypes = {
    peer: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
}

export default Video;
