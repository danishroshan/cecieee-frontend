/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';
import { Container,NavLink  } from './TopHeaderStyles';
const TopHeader = () => (
    <Container>
    <Link href="/"><NavLink>Home</NavLink></Link>
    <Link href="/about"><NavLink>About Us</NavLink></Link>
    </Container>
);

export default TopHeader;