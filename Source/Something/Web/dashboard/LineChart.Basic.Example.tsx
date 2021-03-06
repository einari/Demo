import * as React from 'react';
import { IChartProps, ILineChartProps, LineChart } from '@fluentui/react-charting';
import { DefaultPalette } from '@fluentui/react/lib/Styling';

interface ILineChartBasicState {
    width: number;
    height: number;
}

export class LineChartBasicExample extends React.Component<{}, ILineChartBasicState> {
    constructor(props: ILineChartProps) {
        super(props);
        this.state = {
            width: 700,
            height: 300,
        };
    }

    public render(): JSX.Element {
        return <div>{this._basicExample()}</div>;
    }

    private _basicExample(): JSX.Element {
        const data: IChartProps = {
            chartTitle: 'Line Chart',
            lineChartData: [
                {
                    legend: 'From_Legacy_to_O365',
                    data: [
                        {
                            x: new Date('2020-03-03T00:00:00.000Z'),
                            y: 216000,
                            onDataPointClick: () => alert('click on 217000'),
                        },
                        {
                            x: new Date('2020-03-03T10:00:00.000Z'),
                            y: 218123,
                            onDataPointClick: () => alert('click on 217123'),
                        },
                        {
                            x: new Date('2020-03-03T11:00:00.000Z'),
                            y: 217124,
                            onDataPointClick: () => alert('click on 217124'),
                        },
                        {
                            x: new Date('2020-03-04T00:00:00.000Z'),
                            y: 248000,
                            onDataPointClick: () => alert('click on 248000'),
                        },
                        {
                            x: new Date('2020-03-05T00:00:00.000Z'),
                            y: 252000,
                            onDataPointClick: () => alert('click on 252000'),
                        },
                        {
                            x: new Date('2020-03-06T00:00:00.000Z'),
                            y: 274000,
                            onDataPointClick: () => alert('click on 274000'),
                        },
                        {
                            x: new Date('2020-03-07T00:00:00.000Z'),
                            y: 260000,
                            onDataPointClick: () => alert('click on 260000'),
                        },
                        {
                            x: new Date('2020-03-08T00:00:00.000Z'),
                            y: 300000,
                            onDataPointClick: () => alert('click on 300000'),
                        },
                        {
                            x: new Date('2020-03-09T00:00:00.000Z'),
                            y: 218000,
                            onDataPointClick: () => alert('click on 218000'),
                        },
                    ],
                    color: DefaultPalette.blue,
                    onLineClick: () => console.log('From_Legacy_to_O365'),
                },
                {
                    legend: 'All',
                    data: [
                        {
                            x: new Date('2020-03-03T00:00:00.000Z'),
                            y: 297000,
                        },
                        {
                            x: new Date('2020-03-04T00:00:00.000Z'),
                            y: 284000,
                        },
                        {
                            x: new Date('2020-03-05T00:00:00.000Z'),
                            y: 282000,
                        },
                        {
                            x: new Date('2020-03-06T00:00:00.000Z'),
                            y: 294000,
                        },
                        {
                            x: new Date('2020-03-07T00:00:00.000Z'),
                            y: 224000,
                        },
                        {
                            x: new Date('2020-03-08T00:00:00.000Z'),
                            y: 300000,
                        },
                        {
                            x: new Date('2020-03-09T00:00:00.000Z'),
                            y: 298000,
                        },
                    ],
                    color: DefaultPalette.green,
                },
            ],
        };

        const rootStyle = { width: `${this.state.width}px`, height: `${this.state.height}px` };
        const margins = { left: 35, top: 20, bottom: 35, right: 20 };

        return (
            <>
                <div style={rootStyle}>
                    <LineChart
                        data={data}
                        legendsOverflowText={'Overflow Items'}
                        yMinValue={200}
                        yMaxValue={301}
                        height={this.state.height}
                        width={this.state.width}
                        margins={margins}
                    />
                </div>
            </>
        );
    }
}
