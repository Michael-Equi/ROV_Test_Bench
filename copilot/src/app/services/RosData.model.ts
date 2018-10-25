
export class DriveControlData {
    bools: [
        { name: String, value: boolean },
        { name: String, value: boolean },
        { name: String, value: boolean }
    ];
    doubles: [
        { name: String, value: number },
        { name: String, value: number },
        { name: String, value: number }
    ];
    groups: [
        { state: boolean, name: string}
    ];
    ints: [
        { name: string, value: number },
        { name: string, value: number }
    ];
    strs: [
        { length: 0; }
    ];
}

export class Bmp280Data {
    altitudeM: number;
    header: {
        frame_id: string;
        seq: number;
        stamp: {
            nsecs: number;
            secs: number
        };
    };
    preassureA: number;
    pressureP: number;
    tempC: number;
}