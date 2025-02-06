# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build nx-node-22-typescript-5-8-require-esm`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t nx-node-22-typescript-5-8-require-esm`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system nx-node-22-typescript-5-8-require-esm && \
          adduser --system -G nx-node-22-typescript-5-8-require-esm nx-node-22-typescript-5-8-require-esm

COPY dist/nx-node-22-typescript-5-8-require-esm nx-node-22-typescript-5-8-require-esm/
RUN chown -R nx-node-22-typescript-5-8-require-esm:nx-node-22-typescript-5-8-require-esm .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix nx-node-22-typescript-5-8-require-esm --omit=dev -f install

CMD [ "node", "nx-node-22-typescript-5-8-require-esm" ]
