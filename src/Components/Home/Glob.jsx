import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const Glob = () => {
    const globeEl = useRef();
    useEffect(() => {
        // aim at continental US centroid
        globeEl.current.pointOfView({ lat: 160.6, lng: -138.5, altitude: 2 });
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.4;
    }, []);
    return (
        <div>
            <Globe
                width={645}
                height={550}
                ref={globeEl}
                globeImageUrl="https://as1.ftcdn.net/v2/jpg/01/13/06/16/1000_F_113061610_vNoNuCzvYne9xyaDdqb5YECYvFja3ecp.jpg"
                showAtmosphere={false}
                arcDashLength={0.5}
                arcDashGap={1}
                arcDashInitialGap={() => Math.random()}
                arcDashAnimateTime={4000}
                backgroundColor='#7e8284'
            />
        </div>
    );
}

export default Glob;
