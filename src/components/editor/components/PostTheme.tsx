// import { useForm } from '@inertiajs/react'
// import {
//     ActionIcon,
//     Button,
//     ColorInput,
//     Divider,
//     Highlight,
//     Paper,
//     rem,
//     Switch,
//     Text,
//     ThemeIcon,
//     Title,
//     useMantineTheme,
// } from '@mantine/core'
// import { IconAdjustmentsDollar } from '@tabler/icons-react'
// import {
//     BiSolidDownArrow,
//     BiSolidLeftArrow,
//     BiSolidUpArrow,
// } from 'react-icons/bi'
//
// const PRIMARY_COL_HEIGHT = rem(300)
//
// export default function PostTheme() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         backgroundColour: '',
//         bgMainTextColor: '',
//         bgSecondaryTextColor: '',
//         primaryColour: '',
//         primaryMainTextColor: '',
//         primarySecondaryTextColor: '',
//         secondaryColour: '',
//         secondaryMainTextColor: '',
//         secondarySecondaryTextColor: '',
//         isAccentGradient: false,
//         isSubHeadingAccent: false,
//         isHeadingAccent: false,
//         accentBgColour: '',
//         accentColourSimple: '',
//         accentColourGradientOne: '',
//         accentColourGradientTwo: '',
//         ctaSize: 'md',
//         secondaryCtaType: '',
//         iconType: 'default',
//         elementsBorderRadius: '',
//         imageType: '',
//     })
//     // !!!!!!!!!! Image no background? Image With shadow? Image With border?
//     const handleAccentBgColorChange = selectedColor => {
//         // Find the color object in colorWithNames array based on the selected hex code
//         const selectedColorObject = colorsWithNames.find(
//             color => color.hex === selectedColor,
//         )
//
//         if (selectedColorObject) {
//             // Set the primaryColour in your state to the color name
//             setData({
//                 ...data,
//                 accentColourSimple: selectedColorObject.color,
//                 accentBgColour: selectedColor,
//             })
//         } else if (selectedColor === '#ffffff') {
//             setData({
//                 ...data,
//                 accentColourSimple: selectedColor, // Set to empty string or null as there is no specific color name
//                 accentBgColour: selectedColor,
//             })
//         }
//     }
//
//     const theme = useMantineTheme()
//     const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`
//
//     //! for gradients
//     //! also when you choose template you also choose main background colour, secondary colour which you can select to put in certain components, and accent colour for cta, secondary button and icons
//     //! add a way to see contrast
//     //! add a way to choose hover colour
//
//     const allColors = [
//         // white
//         '#ffffff',
//         // Slate
//         '#f8fafc',
//         '#f1f5f9',
//         '#e2e8f0',
//         '#cbd5e1',
//         '#94a3b8',
//         '#64748b',
//         '#475569',
//         '#334155',
//         '#1e293b',
//         '#0f172a',
//         '#020617',
//         // Gray
//         '#f9fafb',
//         '#f3f4f6',
//         '#e5e7eb',
//         '#d1d5db',
//         '#9ca3af',
//         '#6b7280',
//         '#4b5563',
//         '#374151',
//         '#1f2937',
//         '#111827',
//         '#030712',
//         // Zinc
//         '#fafafa',
//         '#f4f4f5',
//         '#e4e4e7',
//         '#d4d4d8',
//         '#a1a1aa',
//         '#71717a',
//         '#52525b',
//         '#3f3f46',
//         '#27272a',
//         '#18181b',
//         '#09090b',
//         // Neutral
//         '#fafafa',
//         '#f5f5f5',
//         '#e5e5e5',
//         '#d4d4d4',
//         '#a3a3a3',
//         '#737373',
//         '#525252',
//         '#404040',
//         '#262626',
//         '#171717',
//         '#0a0a0a',
//         // Stone
//         '#fafaf9',
//         '#f5f5f4',
//         '#e7e5e4',
//         '#d6d3d1',
//         '#a8a29e',
//         '#78716c',
//         '#57534e',
//         '#44403c',
//         '#292524',
//         '#1c1917',
//         '#0c0a09',
//         // Red
//         '#fef2f2',
//         '#fee2e2',
//         '#fecaca',
//         '#fca5a5',
//         '#f87171',
//         '#ef4444',
//         '#dc2626',
//         '#b91c1c',
//         '#991b1b',
//         '#7f1d1d',
//         '#450a0a',
//         // Orange
//         '#fff7ed',
//         '#ffedd5',
//         '#fed7aa',
//         '#fdba74',
//         '#fb923c',
//         '#f97316',
//         '#ea580c',
//         '#c2410c',
//         '#9a3412',
//         '#7c2d12',
//         '#431407',
//         // Amber
//         '#fffbeb',
//         '#fef3c7',
//         '#fde68a',
//         '#fcd34d',
//         '#fbbf24',
//         '#f59e0b',
//         '#d97706',
//         '#b45309',
//         '#92400e',
//         '#78350f',
//         '#451a03',
//         // Yellow
//         '#fefce8',
//         '#fef9c3',
//         '#fef08a',
//         '#fde047',
//         '#facc15',
//         '#eab308',
//         '#ca8a04',
//         '#a16207',
//         '#854d0e',
//         '#713f12',
//         '#422006',
//         // Lime
//         '#f7fee7',
//         '#ecfccb',
//         '#d9f99d',
//         '#bef264',
//         '#a3e635',
//         '#84cc16',
//         '#65a30d',
//         '#4d7c0f',
//         '#3f6212',
//         '#365314',
//         '#1a2e05',
//         // Green
//         '#f0fdf4',
//         '#dcfce7',
//         '#bbf7d0',
//         '#86efac',
//         '#4ade80',
//         '#22c55e',
//         '#16a34a',
//         '#15803d',
//         '#166534',
//         '#14532d',
//         '#052e16',
//         // Emerald
//         '#ecfdf5',
//         '#d1fae5',
//         '#a7f3d0',
//         '#6ee7b7',
//         '#34d399',
//         '#10b981',
//         '#059669',
//         '#047857',
//         '#065f46',
//         '#064e3b',
//         '#022c22',
//         // Teal
//         '#f0fdfa',
//         '#ccfbf1',
//         '#99f6e4',
//         '#5eead4',
//         '#2dd4bf',
//         '#14b8a6',
//         '#0d9488',
//         '#0f766e',
//         '#115e59',
//         '#134e4a',
//         '#042f2e',
//         // Cyan
//         '#ecfeff',
//         '#cffafe',
//         '#a5f3fc',
//         '#67e8f9',
//         '#22d3ee',
//         '#06b6d4',
//         '#0891b2',
//         '#0e7490',
//         '#155e75',
//         '#164e63',
//         '#083344',
//         // Sky
//         '#f0f9ff',
//         '#e0f2fe',
//         '#bae6fd',
//         '#7dd3fc',
//         '#38bdf8',
//         '#0ea5e9',
//         '#0284c7',
//         '#0369a1',
//         '#075985',
//         '#0c4a6e',
//         '#082f49',
//         // Blue
//         '#eff6ff',
//         '#dbeafe',
//         '#bfdbfe',
//         '#93c5fd',
//         '#60a5fa',
//         '#3b82f6',
//         '#2563eb',
//         '#1d4ed8',
//         '#1e40af',
//         '#1e3a8a',
//         '#172554',
//         // Indigo
//         '#eef2ff',
//         '#e0e7ff',
//         '#c7d2fe',
//         '#a5b4fc',
//         '#818cf8',
//         '#6366f1',
//         '#4f46e5',
//         '#4338ca',
//         '#3730a3',
//         '#312e81',
//         '#1e1b4b',
//         // Violet
//         '#f5f3ff',
//         '#ede9fe',
//         '#ddd6fe',
//         '#c4b5fd',
//         '#a78bfa',
//         '#8b5cf6',
//         '#7c3aed',
//         '#6d28d9',
//         '#5b21b6',
//         '#4c1d95',
//         '#2e1065',
//         // Purple
//         '#faf5ff',
//         '#f3e8ff',
//         '#e9d5ff',
//         '#d8b4fe',
//         '#c084fc',
//         '#a855f7',
//         '#9333ea',
//         '#7e22ce',
//         '#6b21a8',
//         '#581c87',
//         '#3b0764',
//         // Fuchsia
//         '#fdf4ff',
//         '#fae8ff',
//         '#f5d0fe',
//         '#f0abfc',
//         '#e879f9',
//         '#d946ef',
//         '#c026d3',
//         '#a21caf',
//         '#86198f',
//     ]
//
//     const colorsWithNames = [
//         { color: 'dark.0', hex: '#C1C2C5' },
//         { color: 'dark.1', hex: '#A6A7AB' },
//         { color: 'dark.2', hex: '#909296' },
//         { color: 'dark.3', hex: '#5C5F66' },
//         { color: 'dark.4', hex: '#373A40' },
//         { color: 'dark.5', hex: '#2C2E33' },
//         { color: 'dark.6', hex: '#25262B' },
//         { color: 'dark.7', hex: '#1A1B1E' },
//         { color: 'dark.8', hex: '#141517' },
//         { color: 'dark.9', hex: '#101113' },
//         { color: 'gray.0', hex: '#F8F9FA' },
//         { color: 'gray.1', hex: '#F1F3F5' },
//         { color: 'gray.2', hex: '#E9ECEF' },
//         { color: 'gray.3', hex: '#DEE2E6' },
//         { color: 'gray.4', hex: '#CED4DA' },
//         { color: 'gray.5', hex: '#ADB5BD' },
//         { color: 'gray.6', hex: '#868E96' },
//         { color: 'gray.7', hex: '#495057' },
//         { color: 'gray.8', hex: '#343A40' },
//         { color: 'gray.9', hex: '#212529' },
//         { color: 'red.0', hex: '#FFF5F5' },
//         { color: 'red.1', hex: '#FFE3E3' },
//         { color: 'red.2', hex: '#FFC9C9' },
//         { color: 'red.3', hex: '#FFA8A8' },
//         { color: 'red.4', hex: '#FF8787' },
//         { color: 'red.5', hex: '#FF6B6B' },
//         { color: 'red.6', hex: '#FA5252' },
//         { color: 'red.7', hex: '#F03E3E' },
//         { color: 'red.8', hex: '#E03131' },
//         { color: 'red.9', hex: '#C92A2A' },
//         { color: 'pink.0', hex: '#FFF0F6' },
//         { color: 'pink.1', hex: '#FFDEEB' },
//         { color: 'pink.2', hex: '#FCC2D7' },
//         { color: 'pink.3', hex: '#FAA2C1' },
//         { color: 'pink.4', hex: '#F783AC' },
//         { color: 'pink.5', hex: '#F06595' },
//         { color: 'pink.6', hex: '#E64980' },
//         { color: 'pink.7', hex: '#D6336C' },
//         { color: 'pink.8', hex: '#C2255C' },
//         { color: 'pink.9', hex: '#A61E4D' },
//         { color: 'grape.0', hex: '#F8F0FC' },
//         { color: 'grape.1', hex: '#F3D9FA' },
//         { color: 'grape.2', hex: '#EEBEFA' },
//         { color: 'grape.3', hex: '#E599F7' },
//         { color: 'grape.4', hex: '#DA77F2' },
//         { color: 'grape.5', hex: '#CC5DE8' },
//         { color: 'grape.6', hex: '#BE4BDB' },
//         { color: 'grape.7', hex: '#AE3EC9' },
//         { color: 'grape.8', hex: '#9C36B5' },
//         { color: 'grape.9', hex: '#862E9C' },
//         { color: 'violet.0', hex: '#F3F0FF' },
//         { color: 'violet.1', hex: '#E5DBFF' },
//         { color: 'violet.2', hex: '#D0BFFF' },
//         { color: 'violet.3', hex: '#B197FC' },
//         { color: 'violet.4', hex: '#9775FA' },
//         { color: 'violet.5', hex: '#845EF7' },
//         { color: 'violet.6', hex: '#7950F2' },
//         { color: 'violet.7', hex: '#7048E8' },
//         { color: 'violet.8', hex: '#6741D9' },
//         { color: 'violet.9', hex: '#5F3DC4' },
//         { color: 'indigo.0', hex: '#EDF2FF' },
//         { color: 'indigo.1', hex: '#DBE4FF' },
//         { color: 'indigo.2', hex: '#BAC8FF' },
//         { color: 'indigo.3', hex: '#91A7FF' },
//         { color: 'indigo.4', hex: '#748FFC' },
//         { color: 'indigo.5', hex: '#5C7CFA' },
//         { color: 'indigo.6', hex: '#4C6EF5' },
//         { color: 'indigo.7', hex: '#4263EB' },
//         { color: 'indigo.8', hex: '#3B5BDB' },
//         { color: 'indigo.9', hex: '#364FC7' },
//         { color: 'blue.0', hex: '#E7F5FF' },
//         { color: 'blue.1', hex: '#D0EBFF' },
//         { color: 'blue.2', hex: '#A5D8FF' },
//         { color: 'blue.3', hex: '#74C0FC' },
//         { color: 'blue.4', hex: '#4DABF7' },
//         { color: 'blue.5', hex: '#339AF0' },
//         { color: 'blue.6', hex: '#228BE6' },
//         { color: 'blue.7', hex: '#1C7ED6' },
//         { color: 'blue.8', hex: '#1971C2' },
//         { color: 'blue.9', hex: '#1864Ab' },
//         { color: 'cyan.0', hex: '#E3FAFC' },
//         { color: 'cyan.1', hex: '#C5F6FA' },
//         { color: 'cyan.2', hex: '#99E9F2' },
//         { color: 'cyan.3', hex: '#66D9E8' },
//         { color: 'cyan.4', hex: '#3BC9DB' },
//         { color: 'cyan.5', hex: '#22B8CF' },
//         { color: 'cyan.6', hex: '#15AABF' },
//         { color: 'cyan.7', hex: '#1098AD' },
//         { color: 'cyan.8', hex: '#0C8599' },
//         { color: 'cyan.9', hex: '#0B7285' },
//         { color: 'teal.0', hex: '#E6FCF5' },
//         { color: 'teal.1', hex: '#C3FAE8' },
//         { color: 'teal.2', hex: '#96F2D7' },
//         { color: 'teal.3', hex: '#63E6BE' },
//         { color: 'teal.4', hex: '#38D9A9' },
//         { color: 'teal.5', hex: '#20C997' },
//         { color: 'teal.6', hex: '#12B886' },
//         { color: 'teal.7', hex: '#0CA678' },
//         { color: 'teal.8', hex: '#099268' },
//         { color: 'teal.9', hex: '#087F5B' },
//         { color: 'green.0', hex: '#EBFBEE' },
//         { color: 'green.1', hex: '#D3F9D8' },
//         { color: 'green.2', hex: '#B2F2BB' },
//         { color: 'green.3', hex: '#8CE99A' },
//         { color: 'green.4', hex: '#69DB7C' },
//         { color: 'green.5', hex: '#51CF66' },
//         { color: 'green.6', hex: '#40C057' },
//         { color: 'green.7', hex: '#37B24D' },
//         { color: 'green.8', hex: '#2F9E44' },
//         { color: 'green.9', hex: '#2B8A3E' },
//         { color: 'lime.0', hex: '#F4FCE3' },
//         { color: 'lime.1', hex: '#E9FAC8' },
//         { color: 'lime.2', hex: '#D8F5A2' },
//         { color: 'lime.3', hex: '#C0EB75' },
//         { color: 'lime.4', hex: '#A9E34B' },
//         { color: 'lime.5', hex: '#94D82D' },
//         { color: 'lime.6', hex: '#82C91E' },
//         { color: 'lime.7', hex: '#74B816' },
//         { color: 'lime.8', hex: '#66A80F' },
//         { color: 'lime.9', hex: '#5C940D' },
//         { color: 'yellow.0', hex: '#FFF9DB' },
//         { color: 'yellow.1', hex: '#FFF3BF' },
//         { color: 'yellow.2', hex: '#FFEC99' },
//         { color: 'yellow.3', hex: '#FFE066' },
//         { color: 'yellow.4', hex: '#FFD43B' },
//         { color: 'yellow.5', hex: '#FCC419' },
//         { color: 'yellow.6', hex: '#FAB005' },
//         { color: 'yellow.7', hex: '#F59F00' },
//         { color: 'yellow.8', hex: '#F08C00' },
//         { color: 'yellow.9', hex: '#E67700' },
//         { color: 'orange.0', hex: '#FFF4E6' },
//         { color: 'orange.1', hex: '#FFE8CC' },
//         { color: 'orange.2', hex: '#FFD8A8' },
//         { color: 'orange.3', hex: '#FFC078' },
//         { color: 'orange.4', hex: '#FFA94D' },
//         { color: 'orange.5', hex: '#FF922B' },
//         { color: 'orange.6', hex: '#FD7E14' },
//         { color: 'orange.7', hex: '#F76707' },
//         { color: 'orange.8', hex: '#E8590C' },
//         { color: 'orange.9', hex: '#D9480F' },
//     ]
//
//     const accentColours = [
//         // Dark
//         '#2C2E33',
//         '#25262B',
//         '#1A1B1E',
//         '#141517',
//         '#101113',
//         // Gray
//         '#ADB5BD',
//         '#868E96',
//         '#495057',
//         '#343A40',
//         '#212529',
//         // Red
//         '#FF6B6B',
//         '#FA5252',
//         '#F03E3E',
//         '#E03131',
//         '#C92A2A',
//         // Pink
//         '#F06595',
//         '#E64980',
//         '#D6336C',
//         '#C2255C',
//         '#A61E4D',
//         // Grape
//         '#CC5DE8',
//         '#BE4BDB',
//         '#AE3EC9',
//         '#9C36B5',
//         '#862E9C',
//         // Violet
//         '#845EF7',
//         '#7950F2',
//         '#7048E8',
//         '#6741D9',
//         '#5F3DC4',
//         // Indigo
//         '#5C7CFA',
//         '#4C6EF5',
//         '#4263EB',
//         '#3B5BDB',
//         '#364FC7',
//         // Blue
//         '#339AF0',
//         '#228BE6',
//         '#1C7ED6',
//         '#1971C2',
//         '#1864AB',
//         // Cyan
//         '#22B8CF',
//         '#15AABF',
//         '#1098AD',
//         '#0C8599',
//         '#0B7285',
//         // Teal
//         '#20C997',
//         '#12B886',
//         '#0CA678',
//         '#099268',
//         '#087F5B',
//         // Green
//         '#51CF66',
//         '#40C057',
//         '#37B24D',
//         '#2F9E44',
//         '#2B8A3E',
//         // Lime
//         '#94D82D',
//         '#82C91E',
//         '#74B816',
//         '#66A80F',
//         '#5C940D',
//         // Yellow
//         '#FCC419',
//         '#FAB005',
//         '#F59F00',
//         '#F08C00',
//         '#E67700',
//         // Orange
//         '#FF922B',
//         '#FD7E14',
//         '#F76707',
//         '#E8590C',
//         '#D9480F',
//     ]
//
//     const textColours = [
//         // Lightest to darkest
//         '#ffffff',
//         '#f9fafb',
//         '#f3f4f6',
//         '#e5e7eb',
//         '#d1d5db',
//         '#9ca3af',
//         '#6b7280',
//         '#4b5563',
//         '#374151',
//         '#1f2937',
//         '#111827',
//         '#030712',
//         // Black
//         '#000000',
//     ]
//     const secondaryTextColours = [
//         // Lightest to darkest
//         '#ffffff',
//         '#f9fafb',
//         '#f3f4f6',
//         '#e5e7eb',
//         '#d1d5db',
//         '#9ca3af',
//         '#6b7280',
//         '#4b5563',
//         '#374151',
//         '#1f2937',
//         '#111827',
//         '#030712',
//         // Black
//         '#000000',
//     ]
//
//     //! add this to forms
//     const imageClass = () => {
//         let className
//         if (data.imageType === 'noBg') {
//             className = 'bg-none'
//         } else if (data.imageType === 'bgPadding') {
//             className = `bg-[${data.accentColourSimple}] p-4`
//         } else if (data.imageType === 'bgPaddingShadow') {
//             className = `bg-[${data.accentColourSimple}] p-4 shadow-lg`
//         } else if (data.imageType === 'bgPaddingBorder') {
//             className = `bg-[${data.accentColourSimple}] p-4 border-2 border-[${data.accentColourSimple}]`
//         }
//
//         return className
//     }
//
//     return (
//         <div className="flex flex-col  h-full  justify-center items-center w-full gap-4 ">
//             <Title order={1} className="w-full text-center">
//                 Choose Project Theme
//             </Title>
//
//             <div className="flex h-full  w-full items-center gap-8 ">
//                 <div className="h-full justify-center w-1/2 flex flex-col gap-4">
//                     <ColorInput
//                         placeholder="Pick a Background color"
//                         label="Background color"
//                         description="Default is white"
//                         withEyeDropper={false}
//                         withPicker={false}
//                         disallowInput
//                         disabled
//                         swatchesPerRow={12}
//                         value={data.backgroundColour}
//                         onChange={e => setData('backgroundColour', e)}
//                         swatches={allColors}
//                     />
//                     <div className="flex justify-center gap-4 w-full">
//                         <div className="w-full">
//                             <ColorInput
//                                 format="hex"
//                                 placeholder="Pick a Main Text Color"
//                                 label="Main Text Color"
//                                 value={data.bgMainTextColor}
//                                 onChange={e => setData('bgMainTextColor', e)}
//                                 withPicker={false}
//                                 swatches={textColours}
//                                 disallowInput
//                                 withEyeDropper={false}
//                             />
//                         </div>
//                         <div className="w-full">
//                             {' '}
//                             <ColorInput
//                                 format="hex"
//                                 placeholder="Pick a Secondary Text Color"
//                                 label="Secondary Text Color"
//                                 value={data.bgSecondaryTextColor}
//                                 onChange={e =>
//                                     setData('bgSecondaryTextColor', e)
//                                 }
//                                 withPicker={false}
//                                 withEyeDropper={false}
//                                 swatches={secondaryTextColours}
//                                 disallowInput
//                             />
//                         </div>
//                     </div>
//                     <Divider my="sm" />
//                     <ColorInput
//                         placeholder="Pick a Primary color"
//                         label="Primary color"
//                         description="Default is white"
//                         withEyeDropper={false}
//                         withPicker={false}
//                         disallowInput
//                         swatchesPerRow={12}
//                         value={data.primaryColour}
//                         onChange={e => setData('primaryColour', e)}
//                         swatches={allColors}
//                     />
//                     <div className="flex justify-center gap-4 w-full">
//                         <div className="w-full">
//                             <ColorInput
//                                 format="hex"
//                                 placeholder="Pick a Main Text Color"
//                                 label="Main Text Color"
//                                 value={data.primaryMainTextColor}
//                                 onChange={e =>
//                                     setData('primaryMainTextColor', e)
//                                 }
//                                 withPicker={false}
//                                 swatches={textColours}
//                                 disallowInput
//                                 withEyeDropper={false}
//                             />
//                         </div>
//                         <div className="w-full">
//                             {' '}
//                             <ColorInput
//                                 format="hex"
//                                 placeholder="Pick a Secondary Text Color"
//                                 label="Secondary Text Color"
//                                 value={data.primarySecondaryTextColor}
//                                 onChange={e =>
//                                     setData('primarySecondaryTextColor', e)
//                                 }
//                                 withPicker={false}
//                                 withEyeDropper={false}
//                                 swatches={secondaryTextColours}
//                                 disallowInput
//                             />
//                         </div>
//                     </div>
//                     <Divider my="sm" />
//                     <ColorInput
//                         placeholder="Pick a Secondary colour"
//                         label="Secondary color"
//                         description="Choose a light colour with a dark primary, choose a dark secondary with a light primary"
//                         withEyeDropper={false}
//                         withPicker={false}
//                         disallowInput
//                         swatchesPerRow={12}
//                         defaultValue="#A5D8FF"
//                         value={data.secondaryColour}
//                         onChange={e => setData('secondaryColour', e)}
//                         swatches={allColors}
//                     />{' '}
//                     <div className="flex justify-center gap-4 w-full">
//                         <div className="w-full">
//                             <ColorInput
//                                 format="hex"
//                                 placeholder="Pick a Main Text Color"
//                                 label="Main Text Color"
//                                 value={data.secondaryMainTextColor}
//                                 onChange={e =>
//                                     setData('secondaryMainTextColor', e)
//                                 }
//                                 withPicker={false}
//                                 swatches={textColours}
//                                 disallowInput
//                                 withEyeDropper={false}
//                             />
//                         </div>
//                         <div className="w-full">
//                             {' '}
//                             <ColorInput
//                                 format="hex"
//                                 placeholder="Pick a Secondary Text Color"
//                                 label="Secondary Text Color"
//                                 value={data.secondarySecondaryTextColor}
//                                 onChange={e =>
//                                     setData('secondarySecondaryTextColor', e)
//                                 }
//                                 withPicker={false}
//                                 withEyeDropper={false}
//                                 swatches={secondaryTextColours}
//                                 disallowInput
//                             />
//                         </div>
//                     </div>
//                     <Divider my="sm" />
//                     <div className="flex flex-col gap-4">
//                         <div className="flex flex-col gap-4">
//                             {' '}
//                             <ColorInput
//                                 placeholder="Pick color"
//                                 label="Accent color"
//                                 description="Your accent should stand out from everything else"
//                                 disallowInput
//                                 withEyeDropper={false}
//                                 withPicker={false}
//                                 defaultValue="#228BE6"
//                                 swatchesPerRow={10}
//                                 value={data.accentBgColour}
//                                 onChange={handleAccentBgColorChange}
//                                 swatches={accentColours}
//                             />
//                             <Switch
//                                 label="Use Gradient Accent"
//                                 size="md"
//                                 checked={data.isAccentGradient}
//                                 onChange={(e: any) =>
//                                     setData(
//                                         'isAccentGradient',
//                                         e.target.checked,
//                                     )
//                                 }
//                             />
//                             <div className="flex  justify-center  gap-4">
//                                 {' '}
//                                 <ColorInput
//                                     placeholder="Pick color"
//                                     label="First gradient color"
//                                     disallowInput
//                                     withEyeDropper={false}
//                                     withPicker={false}
//                                     swatchesPerRow={10}
//                                     value={data.accentColourGradientOne}
//                                     onChange={e =>
//                                         setData('accentColourGradientOne', e)
//                                     }
//                                     swatches={allColors}
//                                 />{' '}
//                                 <ColorInput
//                                     placeholder="Pick color"
//                                     label="Second gradient color"
//                                     disallowInput
//                                     withEyeDropper={false}
//                                     withPicker={false}
//                                     swatchesPerRow={10}
//                                     value={data.accentColourGradientTwo}
//                                     onChange={e =>
//                                         setData('accentColourGradientTwo', e)
//                                     }
//                                     swatches={allColors}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <Divider
//                             my="xl"
//                             label=" Pick Secondary Call To Action Button Type"
//                             labelPosition="center"
//                             className="w-full"
//                         />
//
//                         <div className="flex gap-4 w-full justify-center">
//                             <Button
//                                 onClick={() =>
//                                     setData('secondaryCtaType', 'subtle')
//                                 }
//                                 variant="subtle">
//                                 Settings
//                             </Button>
//                             <Button
//                                 onClick={() =>
//                                     setData('secondaryCtaType', 'light')
//                                 }
//                                 variant="light">
//                                 Settings
//                             </Button>{' '}
//                             <Button
//                                 onClick={() =>
//                                     setData('secondaryCtaType', 'outline')
//                                 }
//                                 variant="outline">
//                                 Settings
//                             </Button>
//                         </div>
//                     </div>
//                     <Divider
//                         my="xl"
//                         label="Pick Icon Type"
//                         labelPosition="center"
//                         className="w-full"
//                     />
//                     <div className="flex flex-col justify-center  gap-4">
//                         <div className="flex w-full gap-4 justify-center">
//                             <ActionIcon
//                                 color="blue"
//                                 variant="transparent"
//                                 onClick={() =>
//                                     setData('iconType', 'transparent')
//                                 }
//                                 size="xl">
//                                 <BiSolidLeftArrow />
//                             </ActionIcon>
//                             <ActionIcon
//                                 color="blue"
//                                 variant="light"
//                                 onClick={() => setData('iconType', 'light')}
//                                 size="xl">
//                                 <BiSolidLeftArrow />
//                             </ActionIcon>{' '}
//                             <ActionIcon
//                                 color="blue"
//                                 onClick={() => setData('iconType', 'outline')}
//                                 size="xl"
//                                 variant="outline">
//                                 <BiSolidLeftArrow />
//                             </ActionIcon>
//                             <ActionIcon
//                                 color="blue"
//                                 variant="filled"
//                                 onClick={() => setData('iconType', 'filled')}
//                                 size="xl">
//                                 <BiSolidLeftArrow />
//                             </ActionIcon>{' '}
//                             <ActionIcon
//                                 color="blue"
//                                 variant="gradient"
//                                 gradient={{ from: 'indigo', to: 'cyan' }}
//                                 onClick={() => setData('iconType', 'gradient')}
//                                 size="xl">
//                                 <BiSolidLeftArrow />
//                             </ActionIcon>
//                         </div>
//
//                         <Divider
//                             my="xs"
//                             label="Pick Border Radius For Icons And Buttons"
//                             labelPosition="center"
//                             className="w-full"
//                         />
//                         <div className="flex items-center w-full gap-4 justify-center">
//                             <div className="flex  items-center gap-4 justify-center w-full">
//                                 <ActionIcon
//                                     color="blue"
//                                     variant="filled"
//                                     radius="xs"
//                                     onClick={() =>
//                                         setData('elementsBorderRadius', 'xs')
//                                     }
//                                     size="xl"></ActionIcon>
//                                 <ActionIcon
//                                     color="blue"
//                                     variant="filled"
//                                     radius="sm"
//                                     onClick={() =>
//                                         setData('elementsBorderRadius', 'sm')
//                                     }
//                                     size="xl"></ActionIcon>
//                                 <ActionIcon
//                                     color="blue"
//                                     variant="filled"
//                                     radius="md"
//                                     onClick={() =>
//                                         setData('elementsBorderRadius', 'md')
//                                     }
//                                     size="xl"></ActionIcon>
//                                 <ActionIcon
//                                     color="blue"
//                                     variant="filled"
//                                     radius="lg"
//                                     onClick={() =>
//                                         setData('elementsBorderRadius', 'lg')
//                                     }
//                                     size="xl"></ActionIcon>
//                                 <ActionIcon
//                                     color="blue"
//                                     variant="filled"
//                                     radius="xl"
//                                     onClick={() =>
//                                         setData('elementsBorderRadius', 'xl')
//                                     }
//                                     size="xl"></ActionIcon>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col w-1/2 h-full gap-4">
//                     <Paper
//                         shadow="xs"
//                         className=" h-[30%]  flex flex-col gap-4 p-4"
//                         style={{
//                             backgroundColor: data.backgroundColour,
//                         }}>
//                         <div className="flex justify-between w-full">
//                             {' '}
//                             <div>
//                                 {' '}
//                                 <Title c={data.bgMainTextColor} order={1}>
//                                     H1 Heading
//                                 </Title>
//                                 <Title
//                                     c={data.bgMainTextColor}
//                                     order={1}
//                                     className="">
//                                     <Highlight
//                                         highlight={['Highlighted']}
//                                         highlightColor={data.accentColourSimple}
//                                         highlightStyles={theme => ({
//                                             padding: `${rem(1)} ${rem(10)}`,
//                                             borderRadius:
//                                                 theme.radius[
//                                                     data.elementsBorderRadius
//                                                 ],
//                                         })}>
//                                         H1 Heading Highlighted
//                                     </Highlight>{' '}
//                                 </Title>
//                                 <Title
//                                     c={data.bgMainTextColor}
//                                     order={1}
//                                     className="">
//                                     <Highlight
//                                         highlight={['Highlighted']}
//                                         highlightStyles={theme => ({
//                                             backgroundImage:
//                                                 theme.fn.linearGradient(
//                                                     45,
//                                                     data.accentColourGradientOne,
//                                                     data.accentColourGradientTwo,
//                                                 ),
//                                             padding: `${rem(1)} ${rem(10)}`,
//                                             borderRadius:
//                                                 theme.radius[
//                                                     data.elementsBorderRadius
//                                                 ],
//                                         })}>
//                                         H1 Heading Highlighted
//                                     </Highlight>{' '}
//                                 </Title>
//                                 <Title
//                                     className="whitespace-nowrap"
//                                     c={data.accentBgColour}
//                                     order={1}>
//                                     H1 Heading Accent
//                                 </Title>
//                                 <Title
//                                     variant="gradient"
//                                     className="whitespace-nowrap"
//                                     gradient={{
//                                         from: data.accentColourGradientOne,
//                                         to: data.accentColourGradientTwo,
//                                     }}
//                                     order={1}>
//                                     H1 Heading Gradient
//                                 </Title>
//                                 <Title c={data.bgMainTextColor} order={2}>
//                                     H2 Heading
//                                 </Title>
//                                 <Title c={data.bgMainTextColor} order={3}>
//                                     H3 Heading
//                                 </Title>
//                                 <Title
//                                     c={data.accentBgColour}
//                                     order={3}
//                                     className="whitespace-nowrap">
//                                     H3 Heading Accent
//                                 </Title>
//                                 <Title
//                                     variant="gradient"
//                                     className="whitespace-nowrap"
//                                     gradient={{
//                                         from: data.accentColourGradientOne,
//                                         to: data.accentColourGradientTwo,
//                                     }}
//                                     order={3}>
//                                     H3 Heading Gradient
//                                 </Title>
//                                 <Text c={data.bgSecondaryTextColor}>
//                                     Text Dimmed
//                                 </Text>
//                             </div>
//                             <div className="flex flex-col gap-2">
//                                 <Button
//                                     className="w-52 "
//                                     color={data.accentColourSimple}
//                                     size={data.ctaSize}
//                                     radius={data.elementsBorderRadius}>
//                                     CTA Button
//                                 </Button>
//
//                                 <Button
//                                     className="w-52 "
//                                     variant="gradient"
//                                     size={data.ctaSize}
//                                     gradient={{
//                                         from: data.accentColourGradientOne,
//                                         to: data.accentColourGradientTwo,
//                                     }}
//                                     radius={data.elementsBorderRadius}>
//                                     CTA Gradient
//                                 </Button>
//                                 {data.secondaryCtaType === 'light' && (
//                                     <Button
//                                         className="w-52 "
//                                         variant="light"
//                                         color={data.accentColourSimple}
//                                         size={data.ctaSize}
//                                         radius={data.elementsBorderRadius}>
//                                         Secondary CTA
//                                     </Button>
//                                 )}
//                                 {data.secondaryCtaType === 'outline' && (
//                                     <Button
//                                         className="w-52 "
//                                         variant="outline"
//                                         color={data.accentColourSimple}
//                                         size={data.ctaSize}
//                                         radius={data.elementsBorderRadius}>
//                                         Secondary CTA
//                                     </Button>
//                                 )}
//
//                                 {data.secondaryCtaType === 'subtle' && (
//                                     <Button
//                                         className="w-52 "
//                                         variant="subtle"
//                                         color={data.accentColourSimple}
//                                         size={data.ctaSize}
//                                         radius={data.elementsBorderRadius}>
//                                         Secondary CTA
//                                     </Button>
//                                 )}
//
//                                 <div className="flex gap-2">
//                                     {' '}
//                                     {data.iconType === 'transparent' && (
//                                         <ThemeIcon
//                                             variant="transparent"
//                                             size="xl"
//                                             c={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     {data.iconType === 'light' && (
//                                         <ThemeIcon
//                                             variant="light"
//                                             size="xl"
//                                             color={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     {data.iconType === 'filled' && (
//                                         <ThemeIcon
//                                             bg={data.accentBgColour}
//                                             size="xl"
//                                             color={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     {data.iconType === 'outline' && (
//                                         <ThemeIcon
//                                             variant="outline"
//                                             size="xl"
//                                             color={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     <ThemeIcon
//                                         variant="gradient"
//                                         size="xl"
//                                         color={data.accentColourSimple}
//                                         radius={data.elementsBorderRadius}
//                                         gradient={{
//                                             from: data.accentColourGradientOne,
//                                             to: data.accentColourGradientTwo,
//                                         }}>
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="icon icon-tabler icon-tabler-currency-dollar"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 24 24"
//                                             stroke-width="2"
//                                             stroke="currentColor"
//                                             fill="none"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round">
//                                             <path
//                                                 stroke="none"
//                                                 d="M0 0h24v24H0z"
//                                                 fill="none"></path>
//                                             <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
//                                             <path d="M12 3v3m0 12v3"></path>
//                                         </svg>
//                                     </ThemeIcon>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="flex flex-col w-full justify-start items-center gap-4">
//                             <div className="flex gap-4">
//                                 <div className="flex  gap-2">
//                                     <Button
//                                         size="lg"
//                                         leftSection={
//                                             <BiSolidUpArrow className="text-2xl" />
//                                         }>
//                                         Upvote
//                                     </Button>
//                                     <Button
//                                         size="lg"
//                                         color="red"
//                                         leftSection={
//                                             <BiSolidDownArrow className="text-2xl" />
//                                         }>
//                                         Upvote
//                                     </Button>
//                                 </div>
//
//                                 {/* <StickyButtonPosts /> */}
//                             </div>
//                         </div>
//                     </Paper>
//                     <Paper
//                         shadow="xs"
//                         className=" h-[30%]  flex flex-col gap-4 p-4"
//                         style={{
//                             backgroundColor: data.primaryColour,
//                         }}>
//                         <div className="flex justify-between w-full">
//                             {' '}
//                             <div>
//                                 {' '}
//                                 <Title c={data.primaryMainTextColor} order={1}>
//                                     H1 Heading
//                                 </Title>
//                                 <Title
//                                     c={data.primaryMainTextColor}
//                                     order={1}
//                                     className="">
//                                     <Highlight
//                                         highlight={['Highlighted']}
//                                         highlightColor={data.accentColourSimple}
//                                         highlightStyles={theme => ({
//                                             padding: `${rem(1)} ${rem(10)}`,
//                                             borderRadius:
//                                                 theme.radius[
//                                                     data.elementsBorderRadius
//                                                 ],
//                                         })}>
//                                         H1 Heading Highlighted
//                                     </Highlight>{' '}
//                                 </Title>
//                                 <Title
//                                     c={data.primaryMainTextColor}
//                                     order={1}
//                                     className="">
//                                     <Highlight
//                                         highlight={['Highlighted']}
//                                         highlightStyles={theme => ({
//                                             backgroundImage:
//                                                 theme.fn.linearGradient(
//                                                     45,
//                                                     data.accentColourGradientOne,
//                                                     data.accentColourGradientTwo,
//                                                 ),
//                                             padding: `${rem(1)} ${rem(10)}`,
//                                             borderRadius:
//                                                 theme.radius[
//                                                     data.elementsBorderRadius
//                                                 ],
//                                         })}>
//                                         H1 Heading Highlighted
//                                     </Highlight>{' '}
//                                 </Title>
//                                 <Title
//                                     className="whitespace-nowrap"
//                                     c={data.accentBgColour}
//                                     order={1}>
//                                     H1 Heading Accent
//                                 </Title>
//                                 <Title
//                                     variant="gradient"
//                                     className="whitespace-nowrap"
//                                     gradient={{
//                                         from: data.accentColourGradientOne,
//                                         to: data.accentColourGradientTwo,
//                                     }}
//                                     order={1}>
//                                     H1 Heading Gradient
//                                 </Title>
//                                 <Title c={data.primaryMainTextColor} order={2}>
//                                     H2 Heading
//                                 </Title>
//                                 <Title c={data.primaryMainTextColor} order={3}>
//                                     H3 Heading
//                                 </Title>
//                                 <Title
//                                     c={data.accentBgColour}
//                                     order={3}
//                                     className="whitespace-nowrap">
//                                     H3 Heading Accent
//                                 </Title>
//                                 <Title
//                                     variant="gradient"
//                                     className="whitespace-nowrap"
//                                     gradient={{
//                                         from: data.accentColourGradientOne,
//                                         to: data.accentColourGradientTwo,
//                                     }}
//                                     order={3}>
//                                     H3 Heading Gradient
//                                 </Title>
//                                 <Text c={data.primarySecondaryTextColor}>
//                                     Text Dimmed
//                                 </Text>
//                             </div>
//                             <div className="flex flex-col gap-2">
//                                 <Button
//                                     className="w-52 "
//                                     color={data.accentColourSimple}
//                                     size={data.ctaSize}
//                                     radius={data.elementsBorderRadius}>
//                                     CTA Button
//                                 </Button>
//
//                                 <Button
//                                     className="w-52 "
//                                     variant="gradient"
//                                     size={data.ctaSize}
//                                     gradient={{
//                                         from: data.accentColourGradientOne,
//                                         to: data.accentColourGradientTwo,
//                                     }}
//                                     radius={data.elementsBorderRadius}>
//                                     CTA Gradient
//                                 </Button>
//                                 {data.secondaryCtaType === 'light' && (
//                                     <Button
//                                         className="w-52 "
//                                         variant="light"
//                                         color={data.accentColourSimple}
//                                         size={data.ctaSize}
//                                         radius={data.elementsBorderRadius}>
//                                         Secondary CTA
//                                     </Button>
//                                 )}
//                                 {data.secondaryCtaType === 'outline' && (
//                                     <Button
//                                         className="w-52 "
//                                         variant="outline"
//                                         color={data.accentColourSimple}
//                                         size={data.ctaSize}
//                                         radius={data.elementsBorderRadius}>
//                                         Secondary CTA
//                                     </Button>
//                                 )}
//
//                                 {data.secondaryCtaType === 'subtle' && (
//                                     <Button
//                                         className="w-52 "
//                                         variant="subtle"
//                                         color={data.accentColourSimple}
//                                         size={data.ctaSize}
//                                         radius={data.elementsBorderRadius}>
//                                         Secondary CTA
//                                     </Button>
//                                 )}
//
//                                 <div className="flex gap-2">
//                                     {' '}
//                                     {data.iconType === 'transparent' && (
//                                         <ThemeIcon
//                                             variant="transparent"
//                                             size="xl"
//                                             c={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     {data.iconType === 'light' && (
//                                         <ThemeIcon
//                                             variant="light"
//                                             size="xl"
//                                             color={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     {data.iconType === 'filled' && (
//                                         <ThemeIcon
//                                             bg={data.accentBgColour}
//                                             size="xl"
//                                             color={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     {data.iconType === 'outline' && (
//                                         <ThemeIcon
//                                             variant="outline"
//                                             size="xl"
//                                             color={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     <ThemeIcon
//                                         variant="gradient"
//                                         size="xl"
//                                         color={data.accentColourSimple}
//                                         radius={data.elementsBorderRadius}
//                                         gradient={{
//                                             from: data.accentColourGradientOne,
//                                             to: data.accentColourGradientTwo,
//                                         }}>
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="icon icon-tabler icon-tabler-currency-dollar"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 24 24"
//                                             stroke-width="2"
//                                             stroke="currentColor"
//                                             fill="none"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round">
//                                             <path
//                                                 stroke="none"
//                                                 d="M0 0h24v24H0z"
//                                                 fill="none"></path>
//                                             <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
//                                             <path d="M12 3v3m0 12v3"></path>
//                                         </svg>
//                                     </ThemeIcon>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="flex flex-col w-full justify-start items-center gap-4">
//                             <div className="flex gap-4">
//                                 {' '}
//                                 <div className="flex  gap-2">
//                                     <Button
//                                         size="lg"
//                                         leftSection={
//                                             <BiSolidUpArrow className="text-2xl" />
//                                         }>
//                                         Upvote
//                                     </Button>
//                                     <Button
//                                         size="lg"
//                                         color="red"
//                                         leftSection={
//                                             <BiSolidDownArrow className="text-2xl" />
//                                         }>
//                                         Upvote
//                                     </Button>
//                                 </div>
//                                 {/* <StickyButtonPosts /> */}
//                             </div>
//                         </div>
//                     </Paper>
//                     <Paper
//                         shadow="xs"
//                         className=" h-[30%]  flex flex-col  gap-4 p-4"
//                         style={{
//                             backgroundColor: data.secondaryColour,
//                         }}>
//                         <div className="flex justify-between w-full">
//                             {' '}
//                             <div>
//                                 {' '}
//                                 <Title
//                                     c={data.secondaryMainTextColor}
//                                     order={1}>
//                                     H1 Heading
//                                 </Title>
//                                 <Title
//                                     c={data.secondaryMainTextColor}
//                                     order={1}
//                                     className="">
//                                     <Highlight
//                                         highlight={['Highlighted']}
//                                         highlightColor={data.accentColourSimple}
//                                         highlightStyles={theme => ({
//                                             padding: `${rem(1)} ${rem(10)}`,
//                                             borderRadius:
//                                                 theme.radius[
//                                                     data.elementsBorderRadius
//                                                 ],
//                                         })}>
//                                         H1 Heading Highlighted
//                                     </Highlight>{' '}
//                                 </Title>
//                                 <Title
//                                     c={data.secondaryMainTextColor}
//                                     order={1}
//                                     className="">
//                                     <Highlight
//                                         highlight={['Highlighted']}
//                                         highlightStyles={theme => ({
//                                             backgroundImage:
//                                                 theme.fn.linearGradient(
//                                                     45,
//                                                     data.accentColourGradientOne,
//                                                     data.accentColourGradientTwo,
//                                                 ),
//                                             padding: `${rem(1)} ${rem(10)}`,
//                                             borderRadius:
//                                                 theme.radius[
//                                                     data.elementsBorderRadius
//                                                 ],
//                                         })}>
//                                         H1 Heading Highlighted
//                                     </Highlight>{' '}
//                                 </Title>
//                                 <Title
//                                     className="whitespace-nowrap"
//                                     c={data.accentBgColour}
//                                     order={1}>
//                                     H1 Heading Accent
//                                 </Title>
//                                 <Title
//                                     variant="gradient"
//                                     className="whitespace-nowrap"
//                                     gradient={{
//                                         from: data.accentColourGradientOne,
//                                         to: data.accentColourGradientTwo,
//                                     }}
//                                     order={1}>
//                                     H1 Heading Gradient
//                                 </Title>
//                                 <Title
//                                     c={data.secondaryMainTextColor}
//                                     order={2}>
//                                     H2 Heading
//                                 </Title>
//                                 <Title
//                                     c={data.secondaryMainTextColor}
//                                     order={3}>
//                                     H3 Heading
//                                 </Title>
//                                 <Title
//                                     c={data.accentBgColour}
//                                     order={3}
//                                     className="whitespace-nowrap">
//                                     H3 Heading Accent
//                                 </Title>
//                                 <Title
//                                     variant="gradient"
//                                     className="whitespace-nowrap"
//                                     gradient={{
//                                         from: data.accentColourGradientOne,
//                                         to: data.accentColourGradientTwo,
//                                     }}
//                                     order={3}>
//                                     H3 Heading Gradient
//                                 </Title>
//                                 <Text c={data.secondarySecondaryTextColor}>
//                                     Text Dimmed
//                                 </Text>
//                             </div>
//                             <div className="flex flex-col gap-2">
//                                 <Button
//                                     className="w-52 "
//                                     color={data.accentColourSimple}
//                                     size={data.ctaSize}
//                                     radius={data.elementsBorderRadius}>
//                                     CTA Button
//                                 </Button>
//
//                                 <Button
//                                     className="w-52 "
//                                     variant="gradient"
//                                     size={data.ctaSize}
//                                     gradient={{
//                                         from: data.accentColourGradientOne,
//                                         to: data.accentColourGradientTwo,
//                                     }}
//                                     radius={data.elementsBorderRadius}>
//                                     CTA Gradient
//                                 </Button>
//                                 {data.secondaryCtaType === 'light' && (
//                                     <Button
//                                         className="w-52 "
//                                         variant="light"
//                                         color={data.accentColourSimple}
//                                         size={data.ctaSize}
//                                         radius={data.elementsBorderRadius}>
//                                         Secondary CTA
//                                     </Button>
//                                 )}
//                                 {data.secondaryCtaType === 'outline' && (
//                                     <Button
//                                         className="w-52 "
//                                         variant="outline"
//                                         color={data.accentColourSimple}
//                                         size={data.ctaSize}
//                                         radius={data.elementsBorderRadius}>
//                                         Secondary CTA
//                                     </Button>
//                                 )}
//
//                                 {data.secondaryCtaType === 'subtle' && (
//                                     <Button
//                                         className="w-52 "
//                                         variant="subtle"
//                                         color={data.accentColourSimple}
//                                         size={data.ctaSize}
//                                         radius={data.elementsBorderRadius}>
//                                         Secondary CTA
//                                     </Button>
//                                 )}
//
//                                 <div className="flex gap-2">
//                                     {' '}
//                                     {data.iconType === 'transparent' && (
//                                         <ThemeIcon
//                                             variant="transparent"
//                                             size="xl"
//                                             c={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     {data.iconType === 'light' && (
//                                         <ThemeIcon
//                                             variant="light"
//                                             size="xl"
//                                             color={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     {data.iconType === 'filled' && (
//                                         <ThemeIcon
//                                             bg={data.accentBgColour}
//                                             size="xl"
//                                             color={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     {data.iconType === 'outline' && (
//                                         <ThemeIcon
//                                             variant="outline"
//                                             size="xl"
//                                             color={data.accentColourSimple}
//                                             radius={data.elementsBorderRadius}>
//                                             <IconAdjustmentsDollar />
//                                         </ThemeIcon>
//                                     )}
//                                     <ThemeIcon
//                                         variant="gradient"
//                                         size="xl"
//                                         color={data.accentColourSimple}
//                                         radius={data.elementsBorderRadius}
//                                         gradient={{
//                                             from: data.accentColourGradientOne,
//                                             to: data.accentColourGradientTwo,
//                                         }}>
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="icon icon-tabler icon-tabler-currency-dollar"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 24 24"
//                                             stroke-width="2"
//                                             stroke="currentColor"
//                                             fill="none"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round">
//                                             <path
//                                                 stroke="none"
//                                                 d="M0 0h24v24H0z"
//                                                 fill="none"></path>
//                                             <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
//                                             <path d="M12 3v3m0 12v3"></path>
//                                         </svg>
//                                     </ThemeIcon>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="flex flex-col w-full justify-start items-center gap-4">
//                             <div className="flex gap-4">
//                                 <div className="flex  gap-2">
//                                     <Button
//                                         size="lg"
//                                         leftSection={
//                                             <BiSolidUpArrow className="text-2xl" />
//                                         }>
//                                         Upvote
//                                     </Button>
//                                     <Button
//                                         size="lg"
//                                         color="red"
//                                         leftSection={
//                                             <BiSolidDownArrow className="text-2xl" />
//                                         }>
//                                         Upvote
//                                     </Button>
//                                 </div>
//
//                                 {/* <StickyButtonPosts /> */}
//                             </div>
//                         </div>
//                     </Paper>
//                 </div>
//             </div>
//         </div>
//     )
// }
