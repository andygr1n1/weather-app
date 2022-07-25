import { ICityInfo } from '@/interfaces/cityInfo.interface'
import { Popover, Transition } from '@headlessui/react'
import _ from 'lodash'
import { Fragment } from 'react'
import { useAppSelector } from '../../../store/hooks'

export const LocationDescription: React.FC = () => {
    const current_city = useAppSelector((store) => store.city$.current_city) as ICityInfo | undefined
    if (!current_city) return null

    return (
        <div className='top-16 w-full max-w-sm px-4'>
            <Popover className='relative'>
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`${open ? '' : 'text-opacity-90'}
                           material-icons-outlined  absolute right-0 top-0 cursor-pointer border-none
                           bg-transparent !text-blue-700 transition-colors hover:!text-blue-500`}
                        >
                            explore
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0 translate-y-1'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-1'
                        >
                            <Popover.Panel
                                className='
                                absolute right-0 top-8 z-10
                                bg-white'
                            >
                                <div
                                    className='
                                    overflow-hidden rounded-lg border-none p-4
                                    shadow-lg ring-1 ring-black ring-opacity-5'
                                >
                                    <div className='font-bold'>Details:</div>
                                    <div>Country: {current_city.country}</div>
                                    <div>Region: {current_city.region}</div>
                                    <div>Type: {_.capitalize(current_city.type)}</div>
                                    <div>Name: {current_city.name}</div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}
