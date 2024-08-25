import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';

interface Props {
    className?: string;
}

export const Filters: React.FC<React.PropsWithChildren<Props>> = ({ className }) => {
    return <div className={cn('mx-auto max-w-[1280px]', className)}>
        <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
        <div className="flex flex-col gap-4">

            <FilterCheckbox text="Можно собирать" value="1" />
            <FilterCheckbox text="Новинки" value="2" />

        </div>
    </div>;
};