import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

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
            <video autoPlay ref={refVideo} playsInline>
                <track kind="captions" />
            </video>
            <span>{name}</span>
        </div>
    );
};

Video.propTypes = {
    peer: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
}

export default Video;
