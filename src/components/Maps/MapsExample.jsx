import { Map, Marker, ZoomControl } from "pigeon-maps";
import { useState } from "react"

const MapsExample = () => {
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`

    const MAPTILER_ACCESS_TOKEN = 'Gg4JtcmMFvdQWCbMgr54'
    const MAP_ID = 'streets-v2'

    function mapTiler(x, y, z, dpr) {
        return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
    }

    return (
        <div className="">
            <div className="">
                <Map
                    provider={mapTiler}
                    dprs={[1, 2]}
                    height={300}
                    defaultCenter={[23.8583, 90.2667]}
                    defaultZoom={11}
                >
                    {/* <Overlay anchor={[22.3685, 91.7964]} offset={[0, 0]}>
                        <img src={img} width={40} height={25} alt='' />
                    </Overlay> */}
                    <Marker
                        width={50}
                        anchor={[23.8583, 90.2667]}
                        color={color}
                        onClick={() => setHue(hue + 30)}
                    />
                    <ZoomControl />
                </Map>
            </div>
        </div>
    );
};

export default MapsExample;