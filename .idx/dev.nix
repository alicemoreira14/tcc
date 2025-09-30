# .idx/dev.nix
{ pkgs, ... }: {
  channel = "stable-24.05";

  packages = [ pkgs.nodejs_20 pkgs.git ];
  env = { };

  idx = {
    previews = {
      enable = true;
      previews = {
        web = {
          # Vite servindo no host externo; porta definida pelo Preview
          command = [ "npm" "run" "dev" "--" "--host" "--port" "$PORT" ];
          manager = "web";
          cwd = ".";
        };
      };
    };
  };
}
