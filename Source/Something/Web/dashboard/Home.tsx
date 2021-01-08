import React from 'react';
import { Stack } from '@fluentui/react';
import { HeatMapChartBasicExample } from './HeatMapChartBasic.Example';
import { LineChartBasicExample } from './LineChart.Basic.Example';
import { PieChartBasicExample } from './PieChart.Basic.Example';
import { GroupedVerticalBarChartBasicExample } from './GroupedVerticalBarChart.Basic.Example';

export const Home = () => {
    return (
        <>
            <div style={{ margin: '1rem' }}>
                <Stack horizontal>
                    <HeatMapChartBasicExample />
                    <LineChartBasicExample />
                </Stack>
                <Stack horizontal>
                    <GroupedVerticalBarChartBasicExample />
                    <PieChartBasicExample />
                </Stack>
            </div>
        </>
    )
};
