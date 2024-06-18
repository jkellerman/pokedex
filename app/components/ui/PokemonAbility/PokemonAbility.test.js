import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import PokemonAbility from "./PokemonAbility";
import useYodaTranslation from "@/app/hooks/useYodaTranslation";

const queryClient = new QueryClient();

jest.mock("@/app/hooks/useYodaTranslation", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("PokemonAbility", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("correctly renders", () => {
    beforeEach(() => {
      useYodaTranslation.mockReturnValue({
        data: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
        refetch: jest.fn(),
      });

      render(
        <QueryClientProvider client={queryClient}>
          <PokemonAbility name="Ability Name" effect="Ability Effect" />
        </QueryClientProvider>
      );
    });

    it("ability name", () => {
      expect(
        screen.getByRole("heading", { level: 3, name: /Ability Name/i })
      ).toBeInTheDocument();
    });

    it("ability effect", () => {
      expect(screen.getByText(/Ability Effect/i)).toBeInTheDocument();
    });

    it("translate button", () => {
      expect(
        screen.getByRole("button", { name: /translate to yoda/i })
      ).toBeInTheDocument();
    });
  });

  describe("when fetching translation", () => {
    beforeEach(() => {
      useYodaTranslation.mockReturnValue({
        data: null,
        isLoading: true,
        isError: false,
        isSuccess: false,
        refetch: jest.fn(),
      });

      render(
        <QueryClientProvider client={queryClient}>
          <PokemonAbility name="Ability Name" effect="Ability Effect" />
        </QueryClientProvider>
      );
    });

    it("shows the loading button text", () => {
      expect(
        screen.getByRole("button", { name: /translating.../i })
      ).toBeInTheDocument();
    });

    it("shows the loader component", () => {
      expect(screen.getByTestId("effect-loader")).toBeInTheDocument();
    });
  });

  describe("when hitting the rate limit fetching translation", () => {
    beforeEach(() => {
      useYodaTranslation.mockReturnValue({
        data: null,
        isLoading: false,
        isError: true,
        isSuccess: false,
        refetch: jest.fn(),
      });

      render(
        <QueryClientProvider client={queryClient}>
          <PokemonAbility name="Ability Name" effect="Ability Effect" />
        </QueryClientProvider>
      );
    });

    it("shows error message", () => {
      expect(
        screen.getByText(
          /Reached the rate limit, you have. Try again later, you must./i
        )
      ).toBeInTheDocument();
    });

    it("displays the effect in english", () => {
      expect(screen.getByText(/Ability Effect/i)).toBeInTheDocument();
    });

    it("displays the default text in button", () => {
      expect(
        screen.getByRole("button", { name: /translate to yoda/i })
      ).toBeInTheDocument();
    });
  });

  describe("when translation is successful", () => {
    it("shows the translated effect", async () => {
      const refetchMock = jest.fn();
      useYodaTranslation.mockReturnValue({
        data: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
        refetch: refetchMock,
      });

      render(
        <QueryClientProvider client={queryClient}>
          <PokemonAbility name="Ability Name" effect="Ability Effect" />
        </QueryClientProvider>
      );

      const user = userEvent.setup();
      const translateButton = screen.getByRole("button", {
        name: /translate to yoda/i,
      });

      await user.click(translateButton);

      useYodaTranslation.mockReturnValue({
        data: "Translated Effect",
        isLoading: false,
        isError: false,
        isSuccess: true,
        refetch: refetchMock,
      });

      render(
        <QueryClientProvider client={queryClient}>
          <PokemonAbility name="Ability Name" effect="Ability Effect" />
        </QueryClientProvider>
      );

      await waitFor(() =>
        expect(screen.getByText(/Translated Effect/i)).toBeInTheDocument()
      );

      expect(
        screen.getByRole("button", { name: /show english/i })
      ).toBeInTheDocument();
    });
  });
});
