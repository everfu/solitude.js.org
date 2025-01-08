"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, LetterFx, Arrow } from '@/once-ui/components';

export default function Home() {
	const hobbys = [
		{
			title: "设计",
			description: "出自1993年，以“设计”为名，于1994年首次发布。",
		},
		{
			title: "易用",
			description: "自开发以来，已拥有超过 1000 个用户。",
		},
		{
			title: "响应式",
			description: "支持多种设备，包括桌面、平板和手机。",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<Heading
								onBackground="neutral-weak"
								variant="display-strong-l"
								>
								Solitude
							</Heading>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<p className="font-code">
									<LetterFx
										trigger="instant">
											一款简洁、易用、响应式的 Hexo 主题
									</LetterFx>
								</p>
							</Heading>
							<Button
								id="readDocs"
								href="/docs"
								variant="secondary">
								<Flex alignItems="center">
									快速开始
									<Arrow trigger="#readDocs"/>
								</Flex>
							</Button>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{hobbys.map((hobby) => (
							<Flex
								style={{ padding: 'var(--responsive-space-l)' }}
								key={hobby.title}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{hobby.title}
										</Text>
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{hobby.description}
									</Text>
								</Flex>
							</Flex>
						))}
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="center" alignItems="center">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2025 Everly. All rights reserved.
				</Text>
			</Flex>
		</Flex>
	);
}
