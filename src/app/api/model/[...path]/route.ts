import { prisma } from '@/server/db';
import { NextRequestHandler } from '@zenstackhq/server/next';

const handler = NextRequestHandler({
    getPrisma: () => prisma,
    useAppDir: true,
});

export {
    handler as DELETE,
    handler as GET,
    handler as PATCH,
    handler as POST,
    handler as PUT,
};
