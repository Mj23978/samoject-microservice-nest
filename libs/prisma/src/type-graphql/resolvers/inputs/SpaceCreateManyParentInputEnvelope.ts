import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateManyParentInput } from "../inputs/SpaceCreateManyParentInput";

@TypeGraphQL.InputType("SpaceCreateManyParentInputEnvelope", {
  isAbstract: true
})
export class SpaceCreateManyParentInputEnvelope {
  @TypeGraphQL.Field(_type => [SpaceCreateManyParentInput], {
    nullable: false
  })
  data!: SpaceCreateManyParentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
